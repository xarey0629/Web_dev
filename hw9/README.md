# Web Programming HW#9

- App URL: http://35.194.248.249:3000/

- Deploy through GCP.

- Function: The same as HW8. Allow users to chat in real-time. 

Step.1: Sing up for GCP(get 300$ free quota).

Step.2: 

		2-0. Build a VM.
		2-1. Set up static public IP and range to 0.0.0.0.
		2-2. Add you port(3000, 4000) into firewall whitelist.
		2-3. Allow HTTPS and HTTP traffic.

Step.3: Push your code up to GitHub(individual repo).

Step.4: Connect to VM through SSH, and install tmux, npm, yarn, etc.

Step.5: Clone your repo and "yarn" to set up the environment.

Step.6: Open two terminals by tmux and run the frontend and the backend separately.

Step.7: Success! You can travel through the http://<publicIP>:3000/ anywhere!


- Some Troubles: In frontend, I originally thought I had to input internal ip as my URL, but finally public worked. It's kind of weird whatsoever.
