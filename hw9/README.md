# Web Programming HW#9

- App URL: http://35.194.248.249:3000/

- Deploy through GCP.

Step.1: Sing up for GCP. (300$ free quota)
Step.2: 

	0. Build a VM.
	1. Set up static public IP and range to 0.0.0.0.
	2. Add you port(3000, 4000) into firewall whitelist.
	3. Allow HTTPS and HTTP traffic.

Step.3: Push your code up to GitHub(individual repo).
Step.4: Connect to VM through SSH, and install tmux, npm, yarn, etc.
Step.5: Clone your repo and "yarn" to set up the environment.
Step.6: Open two terminals by tmux and run the frontend and the backend separately.
Step.7: Success! You can travel through the http://<publicIP>:3000/ anywhere!