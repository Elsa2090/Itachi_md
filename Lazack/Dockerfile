FROM quay.io/maherzubair/sigma-md:beta
RUN git clone https://github.com/Elsa2090/Itachi_md /root/Itachi_md
WORKDIR /root/Itachi_md/
RUN npm install npm@latest
RUN npm install
EXPOSE 8000
CMD ["npm", "start"]
