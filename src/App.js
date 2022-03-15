import CounterHooks from './CounterHooks';
import Mock from './Mock';
import Toggler from './Toggler';

function App() {
	const name = 'Rizo';
	const surname = 'Abduganeoff';
	const job = 'Student';
	const age = '27';

	const luboy = { name, surname, job, age };

	return (
		<div className="App">
			<Mock {...luboy} />
		</div>
	);
}

export default App;

// ertaga git log dagi eski hashtagdan latest hashtag ga otib commit qilishni sorayman
// xato init qilib push qilgandan keyin, dir ni ozgartirib commit ni boshqattan qilish kerak!
// keyboard da qanday qilib close taglarni ohiriga ob otish
