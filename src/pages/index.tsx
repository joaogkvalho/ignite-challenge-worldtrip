import { Banner } from "../components/Banner";
import { Header } from "../components/Header";
import { TravelTypes } from "../components/TravelTypes";
import { Divider } from '../components/Divider'

export default function Home() {
  return (
    <>
      <Header />
      <Banner />

      <TravelTypes />
      <Divider />
    </>
  )
}
