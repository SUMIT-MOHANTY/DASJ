import os, subprocess, sys

def run(cmd):
    result = subprocess.run(cmd, shell=True)
    if result.returncode != 0:
        sys.exit(result.returncode)

if __name__ == '__main__':
    print('Setting up backend dependencies...')
    run('cd backend && npm install')
    print('Setting up frontend dependencies...')
    run('cd frontend && npm install')
    print('Setup complete.')
