> <h1>Note</h1>

> This is a example of microservice project build in NodeJs with RabbitMq. The porpuse of this code is to help other developers to try to understand a little of the microservices world and queue. In this case I build a notification service (consumer) which recieve a notification and send to a queue in RabbitMq.

> <h2>RabitMq Installation</h2>

Run the following command below to create a docker container with RabbitMq

<code>docker run -it --name rabbitmq -p 5672:5672 -p 15672:15672 rabbitmq:3.9-management</code>

When create the container you can access in your browser the URL <code>http://localhost:15672</code>. This page is the administration platform that RabbitMq offer to us. There we can watch all the queues created and their proccess

> Note: The port 5672 and 15672 is the default ports of RabbitMq.

RabbitMq offer to us a default user which is:

> username: guest<br/>
> password: guest

<hr/>

> <h2>Sentry configuration</h2>

In this project we use Sentry to monitor our application. So, before installing the microservice, we have to create a project on the Sentry platform and get the app-key and the project ID.

You can follow this steps on the Sentry documentation to create a project. Don't forget to SingUp first.

<code>https://docs.sentry.io/product/sentry-basics/guides/integrate-frontend/create-new-project/</code>

After create a project, you can get the app-key and project ID from the URL that Sentry create for us:

<code>https://YOUR_APP_KEY.ingest.sentry.io/YOUR_PROJECT_ID</code>

<hr/>

> <h2>Microservice Installation</h2>

Run the following command below to clone the project.

<code>git clone https://github.com/jcpaesf/nodejs-rabbitmq-consumer.git</code>

Run <code>npm install</code> or <code>yarn install</code> to install the dependencies.

<h3>Configuring the .env</h3>

Create the .env file copying the .env.example. The .env contains the following parameters:

This represent the name of our queue on RabbitMq. You literally you can put anything here, but seems more logic if you put a name that represents the bussiness logic, in this case: "notifications" for example.

> QUEUE_NAME_NOTIFICATIONS=

Here we have the host of the RabbitMq container. In production for example we put a IP for the server. But in this case we can put: "localhost"

> QUEUE_HOSTNAME=

The port of the comunication. In this case is 5672 (Default port)

> QUEUE_PORT=

RabbitMq accept two types of protocol <code>amqp</code> and <code>amqps</code>. The<code>amqps</code> is for TLS/SSL encrypted and only works on port 5671, so in this case we use "amqp"

> QUEUE_PROTOCOL=

Here we put the default user of RabbitMq: "guest". In production the "guest" user has to be deleted for security, but before you delete make sure to create another user in the administration platform (<code>http://localhost:15672</code>). For create another user you can check the URL: <code>https://www.ge.com/digital/documentation/proficy-plant-applications/version81/t_gsg_configuring_user_in_RabbitMQ.html</code>

> QUEUE_USERNAME=

Put the default password "guest" or your another password if you create a user and delete the "guest"

> QUEUE_PASSWORD=

Put the app-key that we get from the Sentry after we create a project

> SENTRY_KEY=

Put the project ID that we get from the Sentry after we create a project

> SENTRY_PROJECT=

<hr/>

<h2>Testing the project</h2>

After follow this steps you can run the command <code>yarn dev</code> or <code>npm run dev</code>.
