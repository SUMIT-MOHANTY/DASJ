import argparse, os, shutil
def upload_artifacts(source_dir, dest_dir):
    if not os.path.isdir(source_dir):
        raise FileNotFoundError(f"Source dir {source_dir} does not exist")
    os.makedirs(dest_dir, exist_ok=True)
    for item in os.listdir(source_dir):
        s = os.path.join(source_dir, item)
        d = os.path.join(dest_dir, item)
        if os.path.isdir(s):
            shutil.copytree(s, d, dirs_exist_ok=True)
        else:
            shutil.copy2(s, d)
    print(f"Artifacts from {source_dir} uploaded to {dest_dir}")
def main():
    parser = argparse.ArgumentParser(description='Upload build artifacts')
    parser.add_argument('source', help='Directory with artifacts to upload')
    parser.add_argument('dest', help='Target directory for upload')
    args = parser.parse_args()
    upload_artifacts(args.source, args.dest)
if __name__ == "__main__":
    main()
