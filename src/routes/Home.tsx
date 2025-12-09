import React, { type FC, lazy } from 'react'
import { Link } from 'react-router'
import {
  remoteColumn,
  remoteColumns,
  remoteContainer,
  remoteHero,
  remoteSection,
  remoteIconMF,
} from '../remotes'

const Column = lazy(remoteColumn)
const Columns = lazy(remoteColumns)
const Container = lazy(remoteContainer)
const Hero = lazy(remoteHero)
const Section = lazy(remoteSection)
const IconMF = lazy(remoteIconMF)

const Home: FC = () => (
  <>
    <Hero color='dark' bold>
      <Container>
        <Columns vcentered>
          <Column numericSize={6} content textPosition={['right-tablet', 'centered-mobile']}>
            <h1 className='title'>Federated PWAs</h1>
            <p className='subtitle'>A pattern to build scalable micro-frontend applications</p>
          </Column>
          <Column numericSize={6}>
            <Columns mobile>
              <Column numericSize={4} numericSizeOffset={'4-mobile'}>
                <IconMF />
              </Column>
            </Columns>
          </Column>
        </Columns>
      </Container>
    </Hero>
    <Section article content>
      <Container>
        <Columns>
          <Column numericSize='8-desktop' numericSizeOffset='2-desktop'>
            <h2>Overview</h2>
            <p>The details below are a high level overview of the Federated PWA pattern of creating a federation of <Link to='https://en.wikipedia.org/wiki/Micro_frontend'>micro-frontends (MFE)</Link>. This experience is currently in "whitepaper" form to initially document the pattern. Over time, it will expand this to include more detailed examples and best practices.</p>

            <h3>Request</h3>
            <p>Generally the request to build a solution like this comes from the need to manage and scale complex web applications by breaking them down into smaller, independently deployable modules. Most often this is applicable to large applications or enterprises, but even smaller teams can benefit from the modularity and scalability this pattern offers.</p>

            <h3>Benefits</h3>
            <p><Link to='https://module-federation.io/'>Module Federation</Link> allows multiple teams to work on different parts of an application simultaneously, reducing development time and increasing productivity. It also enables the reuse of components across different projects, leading to a more consistent user experience and reduced duplication of effort.</p>

            <h2>Design</h2>
            <p>This section outlines a high-level description of the pattern. It describes the main three areas of focus within the pattern to define this solution.</p>

            <h3>Pattern</h3>
            <p>It boils down to 3 main parts: starting with Module Federations underpinnings, enabling distributed <Link to='https://reactrouter.com/start/modes#data'>Data Mode</Link> in <Link to='https://reactrouter.com/'>React Router</Link>, and finally Service Workers and scopes with Workbox. Together, they create a solid platform to design and develop scalable solutions for Federated PWAs.</p>

            <h4>Module Federation</h4>
            <p>Starting with Module Federation, we are able to separate and segregate different vertical and horizontal concerns within the application. In this application, it draws from a shared library of atomic components. These components follow the Atomic design pattern and are built upon a custom implementation of the Bulma CSS framework. There are templates and layouts defined on top of that foundation to provide the connective tissue between product MFEs.</p>

            <h4>React Router</h4>
            <p>React Router recently aligned with Remix to provide multiple modes of routing capabilities, each with a slightly different feature set and capabilities. This layer of the pattern follows the <Link to='https://www.patterns.dev/vanilla/route-based/'>Route Based Splitting</Link> pattern. Data Mode provided a clean delineation between routes, nesting complex layouts, and a separation between api interaction and presentation logic. The Routes of each MFE connect to the federation and leverage the same building blocks defined above. Each MFEs' Routes are dynamically loaded into the Host application.</p>

            <h4>Service Workers</h4>
            <p>Combined with a manifest in the Host, Service Workers enable advanced caching strategies, offline support, and background data synchronization, enhancing the performance and reliability of Federated PWAs. We used <Link to='https://developer.chrome.com/docs/workbox/'>Workbox</Link> to provide the framework for Service Worker implementation. Each MFE has its own Service Worker minimally responsible for caching application assets, allowing for immediate updates when the Worker detects changes. These are scoped to their respective modules to ensure isolation and prevent conflicts.</p>

            <h3>Dependencies</h3>
            <ul>
              <li><code>@module-federation/enhanced</code></li>
              <li><code>react</code></li>
              <li><code>react-dom</code></li>
              <li><code>react-router</code></li>
            </ul>

            <h3>Dev Dependencies</h3>
            <ul>
              <li><code>@rspack</code></li>
              <li><code>eslint</code></li>
              <li><code>jest</code></li>
              <li><code>prettier</code></li>
              <li><code>playwright</code></li>
              <li><code>typescript</code></li>
              <li><code>workbox</code></li>
            </ul>

            <h2>References</h2>
            <ul>
              <li><Link to='https://en.wikipedia.org/wiki/Micro_frontend'>https://en.wikipedia.org/wiki/Micro_frontend</Link></li>
              <li><Link to='https://module-federation.io/'>https://module-federation.io/</Link></li>
              <li><Link to='https://reactrouter.com/'>https://reactrouter.com/</Link></li>
              <li><Link to='https://reactrouter.com/start/modes#data'>https://reactrouter.com/start/modes#data</Link></li>
              <li><Link to='https://www.patterns.dev/vanilla/route-based/'>https://www.patterns.dev/vanilla/route-based/</Link></li>
              <li><Link to='https://developer.chrome.com/docs/workbox/'>https://developer.chrome.com/docs/workbox/</Link></li>
            </ul>
          </Column>
        </Columns>
      </Container>
    </Section>
  </>
)
export default Home
