Multimedia Door Phone Project

Titre : Prototypage d'un portier vidéo à base de raspberry pi.

Description :

Un portier vidéo est un équipement d'une habitation assimilable à une
sonnette permettant de diffuser la vidéo du visiteur et permettant un
échange vocal entre le visiteur et l'hôte. Les systèmes les plus
basiques sont généralement vendus entre 150 et 250€, et nécessitent un
récepteur (écran+micro+haut-parleur) dédié à l'intérieur de
l'habitation.  Les systèmes plus évolués, basés sur des architectures
de réseaux informatiques (intranet/internet) et permettant également
la détection de mouvement, la journalisation des visites (avec
éventuellement prise de photo ou de message vidéo), le déclenchement
d'alarmes (avec prise de photo ou de vidéo) en cas de vandalisme, la
notification à distance en cas d'absence, ..., existent sur des gammes
de prix beaucoup plus élevées (allant de 500€ à plus de 3000€).

Avec l'apparition des nano-ordinateurs (raspberry pi, banana pi, ...) 
et surtout en raison de leur faible coût, plusieurs projets de
réalisation de portier vidéo sophistiqués ont émergé et les étapes de
réalisation sont plus ou moins diffusées sur le web, avec des budgets
de l'ordre de 80€ à 200€.

Cependant, les projets présentés se résument essentiellement à une
énumération de matériel/composants, une annonce d'infrastructure
logicielle et un cahier des charges aussi succinct que la description
ci-dessus.  Les choix matériels sont généralement justifiés par le
rapport qualité/prix et la facilité de réalisation, les choix
logiciels sont quant eux ne sont tout simplement pas justifiés. Aucune
comparaison sur les solutions existantes n'est proposée, et aucun
élément de mise en œuvre n'est également apporté.
 
L'objectif du projet est donc de définir d'une part le cahier des
charges correspondant à l'ensemble des fonctionnalités minimales que
l'on peut exiger d'un vidéophone, de définir et de hiérarchiser les
fonctionnalités qu'il serait également possible de mettre en œuvre ;
et d'autre part de réaliser un prototype (essentiellement logiciel) du
système de gestion du vidéophone. Les étudiants devront s'approprier
les différents protocoles et les différentes solutions permettant de
communiquer en audio/vidéo sur un réseau local (voire sur le réseau
internet), ils devront également étudier les aspects liés à la
sécurité des données transmises (ces aspects ne sont jamais abordés,
pas plus dans les solutions décrites par des amateurs que dans les
solutions propriétaires -- ce qui est assez dérangeant).

Enfin, le travail bibliographique sera suivi d'une implémentation des
solutions logicielles retenues, notamment dans la réalisation d'une
interface d'administration à distance du portier et dans l'adaptation
de solutions de communication audio/vidéo pour intégrer les actions
basiques de l'hôte, à savoir « décrocher », « raccrocher », et
éventuellement déclencher l'ouverture d'une porte ou d'un portail,
soit à partir d'un ordinateur (les principaux systèmes d'exploitation
devant être gérés, dont LINUX), soit à partir d'une tablette ou d'un
smartphone.




Matériel :
- Raspberry pi B
- micro/haut-parleur
- bouton d'appel ou capteur piezzoélectrique
- camera (+led pour vision nocturne)

- Extensions possibles
  - capteur PIR (détection mouvement)
  - Alim en POE
  - relay gâche élec ou (non exclusif) portail
  - ouverture par commande/badge RFID
  - affichage LCD

Logiciel :
- serveur IPBX ou (non exclusif) serveur SIP(+SSL/TLS)
- client SIP (linphone, ...)


Cahier des charges :
- Alim :
  - alim de secours
  - alertes en cas de défaillance
- connexion réseau :
  - ethernet
- admin/monitoring/reboot à distance
- sécurité :
  - alerte/photo (mail, SMS, ...) en cas d'effraction/vandalisme
  - déconnexion réseau (après alerte) en cas d'effraction
- redirection internet en cas d'absence/selon paramétrage
- client multi-plateforme (PC win, PC linux, Mac, android, iPhone, ...)
- vision nocturne

Ressources :
- https://www.developpez.net/forums/d1611108/general-developpement/programmation-systeme/embarque/raspberry-pi/conseils-realiser-portier-visiophone-raspberry/
- https://www.doorpi.org/
- http://marpoz.blogspot.fr/2013/01/door-berry-10_9.html

- https://www.raspberrypi.org/magpi/
- http://www.framboise314.fr/the-magpi/
- http://www.framboise314.fr/

Biblio :
- serveur PABX/IPBX (asterisk) et dérivés/surcouches (trixbox, XiVO, ...)
- protocole SIP et serveurs SIP (FreeSwitch, flexisip, Kamailio, ...)


Autres liens :
- https://learn.adafruit.com/monitor-your-home-with-the-raspberry-pi-b-plus/monitoring-your-home-via-wifi
- https://arest.io/
- http://www.touteladomotique.com/index.php?option=com_content&view=article&id=641
