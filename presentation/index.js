// Import React
import React from "react";

import consumerProps from '../assets/consumerProps.java';
import producerProps from '../assets/producerProps.java';
import consumerJavaCode from '../assets/consumer.java';
import producerJavaCode from '../assets/producer.java';

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  Image,
  Code,
  CodePane,
  Link,
  Appear,
  Layout,
  Fit,
  Fill
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");

const images = {
  consumers_nongroup: require("../assets/consumers_nongroup.jpg"),
  consumers_group: require("../assets/consumers_group.jpg"),
  consumers_group_mtpc: require("../assets/consumers_group_mtpc.jpg"),
  consumers_group_multi: require("../assets/consumers_group_multi.jpg"),
  kafka_e2e: require("../assets/kafka_e2e.png"),
};

const codeSnippets = {
  consumers_nongroup: require("../assets/consumers_nongroup.jpg"),
  consumers_group: require("../assets/consumers_group.jpg"),
  consumers_group_mtpc: require("../assets/consumers_group_mtpc.jpg"),
  consumers_group_multi: require("../assets/consumers_group_multi.jpg"),
};

preloader(images);

const theme = createTheme({
  primary: "white",
  secondary: "#1F2022",
  tertiary: "#03A9FC",
  quartenary: "#CECECE"
}, {
  primary: "Montserrat",
  secondary: "Helvetica"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Kafka
          </Heading>
          <Appear fid="1">
            <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
              like a bit off a shovel
            </Text>
          </Appear>
        </Slide>
        <Slide transition={["fade"]} bgColor="black">
          <Heading size={2} textColor="tertiary">What is Kafka?</Heading>
          <BlockQuote>
            <Quote>Apache Kafka™ is a distributed streaming platform. What exactly does that mean?</Quote>
            <Cite>Apache Kafka™ Homepage</Cite>
          </BlockQuote>
        </Slide>

        <Slide transition={["fade"]} bgColor="black">
          <Heading size={2} textColor="tertiary">Again..... What is Kafka???</Heading>
          <Layout>
              <BlockQuote textColor="primary">It is a system that lets you publish and subscribe to streams of records. In this respect it is similar to a message queue or enterprise messaging system.</BlockQuote>
          </Layout>
          <Layout>
              <BlockQuote textColor="primary">It is a system that lets you store streams of records in a fault-tolerant way.</BlockQuote>
          </Layout>
          <Layout>
              <BlockQuote textColor="primary">It is a system that lets you process streams of records as they occur (Real time).</BlockQuote>
          </Layout>
        </Slide>

        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={5} textColor="secondary" fit>What is Kafka good for?</Heading>
          <Layout>
            <BlockQuote size={8} textColor="primary">Kafka is good at real time data propogation and storage</BlockQuote>
          </Layout>
          <Layout>
            <BlockQuote size={8} textColor="primary">Kafka when used as the data backbone of a company allows future adaptations by abstracting communications between application into a more reactive style approach</BlockQuote>
          </Layout>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={2} lineHeight={1} textColor="tertiary" fit>Advantages of Kafka</Heading>
          <Appear fid="1">
            <Heading size={8} lineHeight={2} textColor="secondary">Highly Scalable</Heading>
          </Appear>
          <Appear fid="2">
            <Text size={8} fit lineHeight={1} textColor="secondary">Kafka replicates data and is able to support multiple subscribers. Additionally, it automatically balances consumers in the event of failure. That means that it’s more reliable than similar messaging services available.</Text>
          </Appear>
          <Appear fid="1">
            <Heading size={8} lineHeight={2} textColor="secondary">Highly Durable</Heading>
          </Appear>
          <Appear fid="2">
            <Text size={8} fit lineHeight={1} textColor="secondary">Kafka persists the messages on the disks, which provides intra-cluster replication. This makes for a highly durable messaging system.</Text>
          </Appear>
          <Appear fid="1">
            <Heading size={8} lineHeight={2} textColor="secondary">Highly Reliable</Heading>
          </Appear>
          <Appear fid="2">
            <Text size={8} fit lineHeight={1} textColor="secondary">Kafka is a distributed system, which is able to be scaled quickly and easily without incurring any downtime.</Text>
          </Appear>
          <Appear fid="1">
            <Heading size={8} lineHeight={2} textColor="secondary">Offers High Performance</Heading>
          </Appear>
          <Appear fid="2">
            <Text size={8} fit lineHeight={1} textColor="secondary">Kafka delivers high throughput for both publishing and subscribing, utilizing disk structures that are capable of offering constant levels of performance, even when dealing with many terabytes of stored messages.</Text>
          </Appear>
      </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="secondary">
          <Heading size={2} lineHeight={2} textColor="tertiary">Consumers</Heading>
          <Layout>
            <Layout>
              <Heading size={8} fill>Indevidual consumers</Heading>
            </Layout>
            <Fill>
              <Image width="40%" src={images.consumers_nongroup}/>
            </Fill>
          </Layout>
          <Layout>
            <Layout>
              <Heading size={8} fill>Grouped consumers</Heading>
            </Layout>
            <Fill>
              <Image width="40%" src={images.consumers_group}/>
            </Fill>
          </Layout>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="secondary">
          <Heading size={2} lineHeight={2} textColor="tertiary">Consumers cont....</Heading>
          <Layout>
            <Layout>
              <Heading size={8} fit>Multiple Groups consumers</Heading>
            </Layout>
            <Fill>
              <Image width="40%" src={images.consumers_group_multi}/>
            </Fill>
          </Layout>
          <Layout>
            <Layout>
              <Heading size={8} fit>Parellel consumption limited by partitions</Heading>
            </Layout>
            <Fill>
              <Image width="40%" src={images.consumers_group_mtpc}/>
            </Fill>
          </Layout>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor="secondary">
          <Heading size={2} textColor="tertiary">Kafka diagram</Heading>
          <Image height="600" src={images.kafka_e2e}/>
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" textColor="secondary">
          <Appear fid="1">
            <Heading size={5} textColor="tertiary">Example producer code</Heading>
          </Appear>
          <Appear fid="2">
            <CodePane lang="javascript" source={producerJavaCode}/>
          </Appear>
          <Appear fid="3">
            <Heading size={5} textColor="tertiary">Example consumer code</Heading>
          </Appear>
          <Appear fid="4">
            <CodePane lang="javascript" source={consumerJavaCode}/>
          </Appear>
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" textColor="secondary">
          <Appear fid="1">
            <Heading size={5} textColor="tertiary">Basic producer config</Heading>
          </Appear>
          <Appear fid="2">
            <CodePane lang="javascript" source={producerProps}/>
          </Appear>
          <Appear fid="3">
            <Heading size={5} textColor="tertiary">Basic consumer config</Heading>
          </Appear>
          <Appear fid="4">
            <CodePane lang="javascript" source={consumerProps}/>
          </Appear>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="secondary">
            <Heading size={2} textColor="tertiary">Real usage example?</Heading>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor="secondary">
            <Heading size={2} textColor="tertiary">Further reading</Heading>
            <List>
              <ListItem><Link href="https://kafka.apache.org/">Kafka home</Link></ListItem>
              <ListItem><Link href="https://www.alooma.com/live">Live Kafka data visualisation</Link></ListItem>
              <ListItem><Link href="https://www.youtube.com/watch?v=EiWsPd6JDoo">Kafka explained video</Link></ListItem>
              <ListItem><Link href="https://www.youtube.com/watch?v=udnX21__SuU">Core concepts video</Link></ListItem>
              <ListItem><Link href="https://github.com/confluentinc/examples">Kafka code examples</Link></ListItem>
              <ListItem><Link href="https://www.confluent.io/blog/introducing-kafka-streams-stream-processing-made-simple/">Kafka streams made simple</Link></ListItem>
            </List>
        </Slide>

      </Deck>
    );
  }
}
