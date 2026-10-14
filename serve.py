#!/usr/bin/env python3
"""Serve the finance app locally; npm forwards arguments to this script."""
import argparse
from functools import partial
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path


def port_number(value):
    try:
        port = int(value)
    except ValueError:
        raise argparse.ArgumentTypeError('port must be an integer') from None
    if not 1 <= port <= 65535:
        raise argparse.ArgumentTypeError('port must be between 1 and 65535')
    return port


parser = argparse.ArgumentParser(description='Run Remember Finance on localhost.')
parser.add_argument('--port', type=port_number, default=8766, help='local port (default: 8766)')
args = parser.parse_args()
handler = partial(SimpleHTTPRequestHandler, directory=str(Path(__file__).resolve().parent / 'dist'))
try:
    server = ThreadingHTTPServer(('127.0.0.1', args.port), handler)
except OSError as error:
    parser.exit(1, f'Could not start on port {args.port}: {error}\nChoose another port with npm start -- --port 8767\n')
print(f'Remember Finance: http://localhost:{args.port}/#trials', flush=True)
try:
    server.serve_forever()
except KeyboardInterrupt:
    pass
finally:
    server.server_close()
