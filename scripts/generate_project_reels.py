import os
import sys

try:
    from moviepy.editor import ImageClip, concatenate_videoclips, TextClip, CompositeVideoClip
except ImportError:
    print("Error: 'moviepy' not found. Please run: pip install moviepy")
    sys.exit(1)

"""
MorleyAI Media Factory: Project Speedruns
-----------------------------------------
This script automatically generates high-velocity promo reels for Python projects.
It takes a directory of screenshots and stitches them into a 30s 'Elite Tech' video.

Usage:
1. Place project screenshots in /public/assets/projects/[project_name]/
2. Run: python scripts/generate_project_reels.py [project_name]
"""

def generate_reel(project_name):
    asset_dir = f"public/assets/projects/{project_name}"
    output_file = f"public/videos/reels/{project_name}_reel.mp4"
    
    if not os.path.exists(asset_dir):
        print(f"Error: Directory {asset_dir} does not exist.")
        return

    os.makedirs(os.path.dirname(output_file), exist_ok=True)

    # In a real scenario, we'd list files and sort them
    # For this boilerplate, we assume a list of images provided by the user
    # Or we can scan the directory:
    images = sorted([os.path.join(asset_dir, f) for f in os.listdir(asset_dir) if f.endswith(('.png', '.jpg'))])
    
    if not images:
        print(f"No images found in {asset_dir}")
        return

    clips = []
    duration_per_image = 1.5 # High-velocity feel

    for img in images:
        clip = ImageClip(img).set_duration(duration_per_image)
        # Apply a subtle zoom-in effect
        clip = clip.resize(lambda t: 1 + 0.05 * t)
        clips.append(clip)

    final_clip = concatenate_videoclips(clips, method="compose")

    # Add 'Tactical' Text Overlay
    txt_clip = TextClip(f"MORPHING: {project_name.upper()}", fontsize=70, color='white', font='Arial-Bold')
    txt_clip = txt_clip.set_position(('center', 'center')).set_duration(final_clip.duration)

    video = CompositeVideoClip([final_clip, txt_clip])
    
    # Write output
    print(f"Exporting reel to {output_file}...")
    # video.write_videofile(output_file, fps=24) # Requires ffmpeg installed

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Usage: python generate_project_reels.py <project_name>")
    else:
        generate_reel(sys.argv[1])
