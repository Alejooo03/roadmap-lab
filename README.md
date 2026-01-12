#Cybersecurity & Dev Lab

This Repository documents my 6-month roadmap using kali linux, Docker and cloud labs.

# Cybersecurity & Dev Lab – Roadmap

This repository documents my hands-on learning process over the next months,
focused on Linux, Docker, Git, virtualization, and cybersecurity fundamentals.

The goal is not only to learn tools, but to understand how systems work,
how they fail, and how to document that process clearly.

---

##  Environment

- Host OS: Windows 11
- Virtualization: VirtualBox
- Guest OS: Kali Linux (official prebuilt image)
- Desktop: XFCE
- Architecture: amd64

---

##  Initial Hardening

- Default Kali credentials were changed
- Root direct login disabled
- Basic system update and cleanup performed

This ensures the virtual machine is safe to use as a daily lab environment.

---

##  Docker Setup & First Experiments

Docker was installed using Kali repositories and configured to run without `sudo`.

Key concepts practiced:
- Running containers in foreground vs detached mode
- Understanding that containers live as long as their main process
- Exposing ports and removing containers cleanly

Example:
- Ran an `nginx` container
- Observed process lifecycle
- Removed container without affecting the host system

This helped clarify the difference between containers and virtual machines.

---

##  Git & GitHub Integration (CLI-based)

Git was configured entirely from the command line:

- Global username and email configured
- SSH key generated and added to GitHub
- SSH authentication tested successfully
- Repository initialized locally
- Default branch renamed to `main`
- Remote repository connected via SSH
- First push performed from Kali to GitHub

All version control operations are done via CLI to reinforce real-world workflows.

---

##  Issues & Troubleshooting

- VirtualBox shared clipboard initially failed due to Guest Additions / kernel mismatch
- Issue was diagnosed and resolved after validating services and environment
- Workarounds and debugging steps were documented

This reinforced the importance of understanding the environment instead of relying on defaults.

---

##  Purpose of This Repository

- Document learning in a transparent and structured way
- Build reproducible lab environments
- Practice secure and professional workflows
- Create a public technical record of growth

This repository will evolve as new tools, labs, and projects are added.

---

##  Next Steps

- Define project structure inside the repository
- Add `.gitignore` for lab artifacts
- Docker volumes and Dockerfiles
- First controlled security lab
- Cloud and automation experiments
