---
title: "Code"
date: 2023-10-27
tags: 
  - Math
  - Topology
  - Lecture Notes
---


import ddg
print("PyDDG version:", ddg.__version__)
pip install git+https://github.com/pyddg/pyddg.git
pip install numpy scipy
brew install git-lfs
git lfs install
pip install git+https://codeberg.org/pyddg/pyddg.git

conda create -n mesh_sim python=3.10
conda activate mesh_sim
pip install git+https://codeberg.org/pyddg/pyddg.git

brew install python@3.10
/opt/homebrew/opt/python@3.10/bin/python3.10 -m venv venv
source venv/bin/activate
pip install git+https://codeberg.org/pyddg/pyddg.git

deactivate
rm -rf venv
python3.10 -m venv venv
source venv/bin/activate
pip install --upgrade pip
pip install fastapi "uvicorn[standard]" numpy torch pydantic ddg
python server.py

### Set Up a Virtual Environment

It is best practice to use a virtual environment to keep your dependencies isolated.

Open your project in WebStorm.

Open the terminal (View > Tool Windows > Terminal).

Run the following to create a virtual environment (named .venv):

# Bash
	python -m venv .venv
	
Activate the environment:

Windows: .venv\Scripts\activate

Mac/Linux: source .venv/bin/activate

(You should see (.venv) appear at the start of your terminal line).

### Install PyDDG

The PyDDG library is typically hosted on the TU Berlin GitLab and is not always available directly via a simple pip install pyddg on standard repositories. You should install it directly from their Git repository:

# Bash
	pip install git+https://git.tu-berlin.de/pyddg/pyddg.git

### Install Python 3.10 via Homebrew

The easiest way to get an older Python version on macOS without messing up your system is using Homebrew.

Open your terminal and run:

# Bash
	brew install python@3.10

Once finished, verify it is installed by running:

# Bash
	python3.10 --version

### Delete the Old Virtual Environment

Deactivate the current environment if it's active:

# Bash
	deactivate
	
Delete the folder:

# Bash
	rm -rf .venv

### Create a New Virtual Environment using Python 3.10

Tell Python 3.10 specifically to build your new environment.

# Bash
	/opt/homebrew/bin/python3.10 -m venv .venv
	(Note: If you are on an Intel Mac, use /usr/local/bin/python3.10 instead. 
	If you aren't sure, just run which python3.10 to find the path).

Activate the new environment:

# Bash
	source .venv/bin/activate
	
Verify the version inside the environment:

# Bash
	python --version