import React, { FC } from 'react'
import { Document, Page, PDFViewer, PDFDownloadLink } from '@react-pdf/renderer'
import LeftSection from './LeftSection'
import { RightSection } from './RightSection'
import styles from '../../styles'
import { Profile } from '../../Domain/Profile'

type Props = Readonly<{
    profile: Profile
}>

const Preview: FC<Props> = ({ profile }) => {
  return (
    <div style={{ flexGrow: 1 }}>
      <PDFViewer
        showToolbar={false}
        style={{
          width: '100%',
          height: '95%',
        }}
      >
        <Template profile={profile} />
      </PDFViewer>
      <PDFDownloadLink
        document={<Template profile={profile} />}
        fileName='somename.pdf'
      >
        {({ loading }) => (loading ? 'Loading document...' : 'Download now!')}
      </PDFDownloadLink>
    </div>
  )
}
// Create Document Component
const Template: FC<Props> = ({ profile }) => {
  return (
    <Document>
      <Page size='A4' style={styles.page}>
        {/* We will divide our document into 2 columns */}
        <LeftSection profile={profile} />
        <RightSection about={profile.about} />
      </Page>
    </Document>
  )
}

export default Preview
