import os
from PIL import Image, ImageFilter

# Define the input and output directories
input_folder = '../public/photo/'
output_folder = '../public/photo_resized/'

# Create the output folder if it doesn't exist
if not os.path.exists(output_folder):
    os.makedirs(output_folder)

# Function to resize the image to 720p and apply a slight blur
def resize_and_blur_image(input_path, output_path):
    with Image.open(input_path) as img:
        # Resize the image to 720p, maintaining aspect ratio
        img.thumbnail((1280, 720))  # Max width = 1280px, max height = 720px
        
        # Apply a slight Gaussian blur (radius 1.5, adjust for your needs)
        img = img.filter(ImageFilter.GaussianBlur(1.0))
        
        # Save the processed image
        img.save(output_path)

# Loop through all files in the input folder
for filename in os.listdir(input_folder):
    input_path = os.path.join(input_folder, filename)
    
    # Check if the file is an image (optional, you can skip non-images)
    if filename.lower().endswith(('png', 'jpg', 'jpeg', 'gif', 'bmp')):
        output_path = os.path.join(output_folder, filename)
        
        # Resize, blur, and save the image
        resize_and_blur_image(input_path, output_path)

print("Resizing and blurring complete. All images are saved in 'public/photo_resized/' folder.")
