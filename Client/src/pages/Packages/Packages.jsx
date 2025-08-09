import React from 'react'
import './Packages.css';
import PackagesBanner from './PackagesBanner';
import MikumiPackage from './MikumiPackage';
import MkomaziPackage from './MkomaziPackage';
import ComboPackage from './ComboPackage';
import Footer from '../../components/Footer';

const Packages = () => {
  return (
    <div>
      <PackagesBanner />
      <MikumiPackage />
      <MkomaziPackage />
      <ComboPackage />
      <Footer />
    </div>
  )
}

export default Packages