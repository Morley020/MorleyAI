# Deployment Guide for MorleyAI

This guide outlines the steps to deploy the MorleyAI platform to a production environment, specifically targeting a VPS in Lusaka (e.g., Infratel or Netone) to ensure compliance with the **Zambia Data Protection Act**.

## Prerequisites

1.  **VPS Server**:
    *   OS: Ubuntu 22.04 LTS (Recommended) or any Docker-compatible Linux distro.
    *   Specs: Minimum 2GB RAM, 2 vCPUs (for smooth Next.js + Docker performance).
    *   Location: **Lusaka, Zambia** (Critical for compliance).

2.  **Domain Name**:
    *   A domain (e.g., `morley-ai.zm`) pointing to your VPS IP address.

3.  **Local Tools**:
    *   Terminal / Command Prompt
    *   `ssh` client
    *   `rsync` or `scp` (for file transfer)

## Step 1: Prepare the Server

SSH into your Zambian VPS:

```bash
ssh user@your-vps-ip
```

Install Docker and Docker Compose:

```bash
# Update repositories
sudo apt update && sudo apt upgrade -y

# Install Docker
sudo apt install -y docker.io

# Install Docker Compose
sudo apt install -y docker-compose

# Start and enable Docker
sudo systemctl start docker
sudo systemctl enable docker
```

## Step 2: Transfer Your Code

Back on your **local machine**, navigate to your project folder and copy the necessary files to the server. You don't need to copy `node_modules`.

```bash
# Run this from your project root on your local machine
rsync -avz --exclude 'node_modules' --exclude '.next' --exclude '.git' ./ user@your-vps-ip:~/morley-ai
```

*Alternatively, you can clone from your private Git repository if you have one set up.*

## Step 3: Launch the Application

Back on your **VPS**:

```bash
cd ~/morley-ai

# Build and start the container in detached mode
sudo docker-compose up -d --build
```

Your app is now running on port `3000`.

## Step 4: Setup Nginx & SSL (Production Security)

Don't expose port 3000 directly. Use Nginx as a reverse proxy with HTTPS.

1.  **Install Nginx**:
    ```bash
    sudo apt install -y nginx
    ```

2.  **Configure Site**:
    Create a config file: `sudo nano /etc/nginx/sites-available/morley-ai`

    ```nginx
    server {
        server_name your-domain.com;

        location / {
            proxy_pass http://localhost:3000;
            proxy_http_version 1.1;
            proxy_set_header Upgrade $http_upgrade;
            proxy_set_header Connection 'upgrade';
            proxy_set_header Host $host;
            proxy_cache_bypass $http_upgrade;
        }
    }
    ```

3.  **Enable Site**:
    ```bash
    sudo ln -s /etc/nginx/sites-available/morley-ai /etc/nginx/sites-enabled/
    sudo systemctl restart nginx
    ```

4.  **Get Free SSL (Certbot)**:
    ```bash
    sudo apt install -y certbot python3-certbot-nginx
    sudo certbot --nginx -d your-domain.com
    ```

## Step 5: Verification

1.  Visit `https://your-domain.com`.
2.  Check the **Compliance Page** to ensure it loads fast (proving local hosting).
3.  Test the **Client Portal** login flow.

## Compliance Checklist (Zambia Act No. 3 of 2021)
- [ ] Server physical location verified as Lusaka.
- [ ] Data encryption at rest (Enabled in app logic).
- [ ] No cross-border data transfer configured in `docker-compose`.
