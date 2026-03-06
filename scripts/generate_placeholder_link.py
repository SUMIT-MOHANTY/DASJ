import argparse
def get_placeholder_link():
    return "https://placeholder.meeting/link"
def main():
    parser = argparse.ArgumentParser(description='Generate a placeholder meeting link')
    parser.add_argument('--print', action='store_true', help='Print the link to stdout')
    args = parser.parse_args()
    link = get_placeholder_link()
    if args.print:
        print(link)
    else:
        with open('placeholder_link.txt', 'w') as f:
            f.write(link)
if __name__ == "__main__":
    main()
