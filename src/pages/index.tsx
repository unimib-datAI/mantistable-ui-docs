import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

import { Check } from 'lucide-react';


const features = [
  {
    name: 'Feature 1',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: Check,
  },
  {
    name: 'Feature 2',
    description: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.',
    icon: Check,
  },
  {
    name: 'Feature 3',
    description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
    icon: Check,
  },
]


export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="MantisTable UI was designed to let you tame your Semantic Table Interpretation approach.">
      <main>
      <div className="overflow-hidden dark:bg-darkBackground bg-lightBackground py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col justify-center lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">An intuitive UI</h2>
              <p className="mt-4 text-lg leading-6 text-gray-600 dark:text-gray-300">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque,
                iste dolor cupiditate blanditiis ratione.
              </p>
              <div className="mt-6 max-w-xl space-y-4 text-base leading-5 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-8">
                    <div className="inline font-bold text-gray-900 dark:text-gray-300">
                      <feature.icon aria-hidden="true" className="absolute left-1 top-1 h-5 w-5 text-primaryGreen dark:text-secondaryGreen" />
                      {feature.name}
                    </div>
                    <span className="inline pl-3 text-gray-600 dark:text-gray-200">{feature.description}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <img
            alt="Product screenshot"
            src="/mantistable-ui-docs/img/mantisUI.png"
            className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
          />
        </div>
      </div>
    </div>
      </main>
    </Layout>
  );
}

