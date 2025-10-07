#!/usr/bin/env python3
"""
Pentagon Esports Website - Local Development Server
Simple Python HTTP server for local development and testing
"""

import http.server
import socketserver
import os
import sys
import webbrowser
from pathlib import Path

# Configuration
DEFAULT_PORT = 8000
DEFAULT_HOST = 'localhost'

class CustomHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    """Custom HTTP request handler with better error handling and logging"""
    
    def end_headers(self):
        # Add CORS headers for development
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')
        super().end_headers()
    
    def log_message(self, format, *args):
        """Override to provide colored output"""
        message = format % args
        if '200' in message:
            print(f"✅ {message}")
        elif '404' in message:
            print(f"❌ {message}")
        else:
            print(f"📝 {message}")
    
    def do_GET(self):
        # Serve index.html for root path
        if self.path == '/':
            self.path = '/index.html'
        
        # Handle common web files
        if self.path.endswith('.html'):
            self.send_response(200)
            self.send_header('Content-type', 'text/html; charset=utf-8')
            self.end_headers()
        elif self.path.endswith('.css'):
            self.send_response(200)
            self.send_header('Content-type', 'text/css')
            self.end_headers()
        elif self.path.endswith('.js'):
            self.send_response(200)
            self.send_header('Content-type', 'application/javascript')
            self.end_headers()
        elif self.path.endswith(('.png', '.jpg', '.jpeg', '.gif', '.svg')):
            self.send_response(200)
            if self.path.endswith('.svg'):
                self.send_header('Content-type', 'image/svg+xml')
            else:
                self.send_header('Content-type', 'image/*')
            self.end_headers()
        
        return super().do_GET()

def find_free_port(start_port=DEFAULT_PORT, max_attempts=10):
    """Find a free port starting from the given port"""
    import socket
    
    for port in range(start_port, start_port + max_attempts):
        try:
            with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
                s.bind((DEFAULT_HOST, port))
                return port
        except OSError:
            continue
    
    return None

def start_server(port=None, host=DEFAULT_HOST, open_browser=True):
    """Start the development server"""
    
    # Change to the directory containing the website files
    website_dir = Path(__file__).parent
    os.chdir(website_dir)
    
    # Find a free port if none specified
    if port is None:
        port = find_free_port()
        if port is None:
            print("❌ Could not find a free port. Please specify one manually.")
            return False
    
    try:
        # Create and start the server
        with socketserver.TCPServer((host, port), CustomHTTPRequestHandler) as httpd:
            server_url = f"http://{host}:{port}"
            
            print("🚀 Pentagon Esports Development Server")
            print("=" * 50)
            print(f"📍 Server running at: {server_url}")
            print(f"📁 Serving files from: {website_dir.absolute()}")
            print("=" * 50)
            print("💡 Press Ctrl+C to stop the server")
            print()
            
            # Open browser if requested
            if open_browser:
                print("🌐 Opening website in your default browser...")
                try:
                    webbrowser.open(server_url)
                except Exception as e:
                    print(f"⚠️  Could not open browser automatically: {e}")
                    print(f"   Please open {server_url} manually in your browser")
            
            # Start serving
            httpd.serve_forever()
            
    except KeyboardInterrupt:
        print("\n\n👋 Server stopped by user")
        return True
    except OSError as e:
        if "Address already in use" in str(e):
            print(f"❌ Port {port} is already in use. Trying to find another port...")
            return start_server(port=find_free_port(port + 1), host=host, open_browser=open_browser)
        else:
            print(f"❌ Server error: {e}")
            return False
    except Exception as e:
        print(f"❌ Unexpected error: {e}")
        return False

def main():
    """Main function with command line argument parsing"""
    import argparse
    
    parser = argparse.ArgumentParser(
        description="Pentagon Esports Website Development Server",
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog="""
Examples:
  python server.py                    # Start server on default port (8000)
  python server.py -p 3000           # Start server on port 3000
  python server.py -p 8080 --no-browser  # Start on port 8080 without opening browser
  python server.py --host 0.0.0.0    # Allow connections from other devices on network
        """
    )
    
    parser.add_argument(
        '-p', '--port',
        type=int,
        default=None,
        help=f'Port to serve on (default: auto-detect starting from {DEFAULT_PORT})'
    )
    
    parser.add_argument(
        '--host',
        default=DEFAULT_HOST,
        help=f'Host to serve on (default: {DEFAULT_HOST})'
    )
    
    parser.add_argument(
        '--no-browser',
        action='store_true',
        help='Do not open browser automatically'
    )
    
    args = parser.parse_args()
    
    # Check if index.html exists
    if not Path('index.html').exists():
        print("❌ index.html not found in current directory")
        print("   Make sure you're running this from the website root directory")
        sys.exit(1)
    
    # Start the server
    success = start_server(
        port=args.port,
        host=args.host,
        open_browser=not args.no_browser
    )
    
    sys.exit(0 if success else 1)

if __name__ == '__main__':
    main()