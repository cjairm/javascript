import * as React from "react";

const DEV_SVR = "https://dev.dummy-svr.com";
const METRIC_ENDPOINT = "/metrics";

// Model for props
interface IProps {
	timeRange: string;
}

// Model for response from server
interface CRUDResponse {
	data: string;
	loading: boolean;
}

// Helper to read or create information - closure
const crudder = (domain: string) => (resource: string) => {
	const url = domain + resource;

	return {
		create: (data: {}) =>
			fetch(url, {
				method: "POST",
				body: JSON.stringify(data)
			})
				.then((x) => x.json())
				.catch((error) => error.message),
		read: () =>
			fetch(url)
				.then((x) => x.json())
				.catch((error) => error.message)
	};
};

// Creating my own hook in order to reuse it
const useFetch = (timer: number, source: string): CRUDResponse => {
	const [data, setData] = React.useState<string>("");
	const [loading, setLoading] = React.useState<boolean>(false);

	// Init our value with a base
	const Base = crudder(DEV_SVR);

	// Function that helps to set values to variables
	const getData = React.useCallback(() => {
		setLoading(true);

		Base(source)
			.read()
			.then((x) => {
				setData(x);
				setLoading(false);
			});
	}, [source, Base]);

	// Keep reading based on the timer.
	React.useEffect(() => {
		const interval = setInterval(getData, timer * 1000);

		return () => {
			clearInterval(interval);
		};
	}, [timer, getData]);

	// Used to read data when the component was rendered (just once)
	React.useEffect(() => {
		getData();
	}, []);

	return {
		data,
		loading
	};
};

const genQuery = (timeRange: string, componentName: string, seed: number) => {
	return `SELECT ${timeRange} WHERE c = ${componentName} AND x = ${
		seed % 7 === 0 ? "true" : "false"
	}`;
};

const Loading: React.FC = () => {
	return <h2>Loading</h2>;
};

const C1: React.FC<IProps> = ({ timeRange }) => {
	const refreshInterval_Secs = 60;
	const query = genQuery(timeRange, "c1", Math.random());
	const data: CRUDResponse = useFetch(
		refreshInterval_Secs,
		METRIC_ENDPOINT + "?query=" + query
	); //TODO fetch data;

	if (data.loading) return <Loading />;
	return <>Hi data</>;
};

const C2: React.FC<IProps> = ({ timeRange }) => {
	const refreshInterval_Secs = 10;
	const query = genQuery(timeRange, "c2", Math.random());
	const data: CRUDResponse = useFetch(
		refreshInterval_Secs,
		METRIC_ENDPOINT + "?query=" + query
	); //TODO fetch data;

	if (data.loading) return <Loading />;
	return <>Hello there data</>;
};

const C3: React.FC<IProps> = ({ timeRange }) => {
	const refreshInterval_Secs = 15;
	const query = genQuery(timeRange, "c3", Math.random());
	const data: CRUDResponse = useFetch(
		refreshInterval_Secs,
		METRIC_ENDPOINT + "?query=" + query
	); //TODO fetch data;

	if (data.loading) return <Loading />;
	return <>Charlie data Tango</>;
};

const C4: React.FC<IProps> = ({ timeRange }) => {
	const refreshInterval_Secs = 42;
	const query = genQuery(timeRange, "c4", Math.random());
	const data: CRUDResponse = useFetch(
		refreshInterval_Secs,
		METRIC_ENDPOINT + "?query=" + query
	); //TODO fetch data;

	if (data.loading) return <Loading />;
	return <>A fox jumped data</>;
};

const C5: React.FC<IProps> = ({ timeRange }) => {
	const refreshInterval_Secs = 30;
	const query = genQuery(timeRange, "c5", Math.random());
	const data: CRUDResponse = useFetch(
		refreshInterval_Secs,
		METRIC_ENDPOINT + "?query=" + query
	); //TODO fetch data;

	if (data.loading) return <Loading />;
	return <>data is king</>;
};

export default () => {
	return (
		<>
			<C1 timeRange="timerangeone" />
			<C2 timeRange="timerangetwo" />
			<C3 timeRange="timerangethree" />
			<C4 timeRange="timerangefour" />
			<C5 timeRange="timerangefive" />
		</>
	);
};
