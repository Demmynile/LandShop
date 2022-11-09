import Banner from '../components/Banner'
import Mission from '../components/Mission'
import Nav from '../components/Nav'
import Team from '../components/Team'
import Vision from '../components/Vision'



export default function Home() {
  return (
	<div>
		<Nav />
		<Banner/>
		<Mission />
		<Vision />
		<Team />
	</div>
  )
}