import { Title } from './components/Title'
import { Description } from './components/Description'
import { Button } from './components/ui/button'

export function App() {
  const text = 'Hello World'
  const descripton = 'Its my frist page'

  return (
    <>
      <Title value={text}/>
      <Description value={descripton} />
      <Button>Default</Button>
      <Button variant={'secondary'}>Secondary</Button>
      <Button variant={'destructive'}>Destuctive</Button>
    </>
  )
}


