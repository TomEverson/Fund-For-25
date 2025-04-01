import os

# Path to the directory containing the photos
directory = '../public/photo_resized/'

# List all files in the directory
files = os.listdir(directory)

# Filter out only the .png files and sort them
png_files = sorted([f for f in files if f.endswith('.png')])

# Rename the files
for idx, file in enumerate(png_files, start=1):
    # Create new name (e.g., D01.png, D02.png, ...)
    new_name = f'D{idx:02}.png'

    # Construct the full old and new file paths
    old_file = os.path.join(directory, file)
    new_file = os.path.join(directory, new_name)

    # Rename the file
    os.rename(old_file, new_file)

    print(f'Renamed {file} to {new_name}')
