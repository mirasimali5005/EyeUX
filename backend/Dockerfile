# Use the official Python image from the Docker Hub
FROM python:3.12.0-slim
# Set the working directory in the container
WORKDIR /app

# Copy the requirements file into the container
COPY requirements.txt .

# Install the required packages
RUN pip install --no-cache-dir -r requirements.txt

# Copy the rest of the application code into the container
COPY . .

# Expose the port the app runs on
EXPOSE 5001

# Command to run the Flask app
ENTRYPOINT ["python", "app.py"]