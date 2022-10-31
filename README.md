
git config --global user.email "exelent206@gmail.com"
git config --global user.name "nbvtim"
git clone https://github.com/nbvtim/work
git add .
git commit -m "nbv"
git push

//не работает
apt install openssh 	
ssh-keygen		# генерировать ключ	
	В директории .ssh создалось два файла — id_rsa и id_rsa.pub. Копируем содержимое файла id_rsa.pub в файл authorized_keys.
	cat ~/.ssh/id_rsa.pub >> ~/.ssh/authorized_keys
bash-completion		# автозавершение
ifconfig			# нужен wlan0
sshd 			# запуск
pkill sshd 		# остановка
netstat -ntlp		# подключен ли к серверу
Поменять порт и вннести иные настройки ssh можно тут: /data/data/com.termux/files/usr/etc/ssh/sshd_config
whoami 			# u0_a289
Садимся за комп и коннектимся: ssh -p 8022 u0_a289@10.21.63.255 10.21.50.112 
Для наглядности: apt install htop // htop