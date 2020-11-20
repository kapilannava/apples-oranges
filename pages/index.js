import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navigation/Navigation';
import Image from 'next/image' ;
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Home() {
  return (
    <div>
        <Navbar />
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
        crossorigin="anonymous"
      />
      <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous" />
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.6/umd/popper.min.js" integrity="sha384-wHAiFfRlMFy6i5SRaxvfOCifBUQy1xHdJ/yoi7FRNXMRBu5WHdZYu1hA6ZOblgut" crossorigin="anonymous" />
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/js/bootstrap.min.js" integrity="sha384-B0UglyR+jN6CkvvICOB2joaf5I4l3gm9GU6Hc1og6Ls7i6U/mkkaduKaBhlAXv9k" crossorigin="anonymous" />
      </Head>
      <div className={styles.container}>
      <main className={styles.main}>

      <Jumbotron className={styles.hero_Img}>
      <Container fluid="lg">
        <Row>
<Col>
<div className={styles.hero_Text}>
      <h1 className={styles.hero_headerText}>We analyze and optimize  <br></br>
digital campaigns for <br></br>
organizations that<br></br>
express culture.
</h1>

      </div>
</Col>
        </Row>
</Container>

</Jumbotron>
      </main>

      </div>
<Container>
<Row>
        <Col>
        <h1>
        What gets measured, <br></br>
gets managed. <br></br>
</h1>
<h3>(Peter Drucker)</h3>
</Col>
        <Col><p>
        Do you have specific questions about your marketing but feel overwhelmed by the amount time, maintenance, and troubleshooting it takes to make your current analytics reports?
        </p>
<br></br>
<p>
Stop looking for a better tool and invest that money into our team. We’ll answer your curiosities, optimize your actions, and present the information in a fun and enlightening way.
</p>
        </Col>
      </Row>
</Container>

<Container fluid="lg" className={styles.section_Three}>
<div className={styles.section_Three_Header}>
<h5>How We Do It</h5>
<h1>Data Storytelling</h1>
</div>
<Container>
<Row>
  <Col>
  <h1>
  Nobody wakes up in the morning wanting to read a data report.
  </h1>
<p>  But what if analytics were inviting and fun while still being super informative?
</p>
<p>
We often rename metrics to keep things easy-to-understand and even combine a couple data sets to get the full picture, all on one page.
</p>
<p>
Give us your questions, we’ll give you the answers, and then some.
</p>
  </Col>

  <Col>
  <Image
src="/data.png"
width="600"
height="400"
/>
  </Col>
</Row>
</Container>
</Container>


<Container className={styles.section_Four}>
  <Row>
    <Col>
    <Image
    src="/funnel.png"
    width="800"
    height="500" />
    </Col>

    <Col>
    <h1>
    We put the fun in funnel marketing.
    </h1>
    <p>
    Toss out the whiteboard. Let us map and track your customers’ journey from first contact to final sale.
    </p>
<p>
Most analysts can tell you how many people went through your funnel but we go above and beyond by detailing who, where, when and other fascinating metrics about your users, even the ones that didn’t convert!
</p>
<p>
Learn more about custom KPI tracking and analysis (coming soon)

</p>
    </Col>
  </Row>
</Container>

    </div>
  )
}
