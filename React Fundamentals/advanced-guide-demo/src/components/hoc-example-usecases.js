//Authentication HOC
//You can create an HOC that checks whether a user is authenticated and conditionally renders a component based on that information.
function withAuth(Component) {
    return function AuthenticatedComponent(props) {
        if (userIsAuthenticated) {
            return <Component {...props} />;
        } else {
            return <Login />;
        }
    };
}

//Data Fetching HOC
//HOCs can handle data fetching logic and pass the fetched data as props to the wrapped component.
function withDataFetching(Component) {
    return function DataFetchingComponent(props) {
        const [data, setData] = useState([]);
        useEffect(() => {
            // Fetch data here and update state
        }, []);

        return <Component data={data} {...props} />;
    };
}

//Logging HOC:
//An HOC for logging component lifecycle events or prop changes can be helpful for debugging.
function withLogger(Component) {
    return class LoggingComponent extends React.Component {
        componentDidUpdate(prevProps) {
            console.log("Previous Props:", prevProps);
            console.log("Current Props:", this.props);
        }

        render() {
            return <Component {...this.props} />;
        }
    };
}

//Styling HOC:
//You can create an HOC that applies CSS styles or CSS-in-JS to a component.
function withStyle(Component) {
    return function StyledComponent(props) {
        return (
            <div style={{ backgroundColor: "lightgray", padding: "10px" }}>
                <Component {...props} />
            </div>
        );
    };
}

//Route Protection HOC:
//HOCs can be used to protect routes from unauthorized access.
function withRouteProtection(Component) {
    return function ProtectedRoute(props) {
        if (userIsAuthorized) {
            return <Component {...props} />;
        } else {
            return <Redirect to="/login" />;
        }
    };
}

//Internationalization (i18n) HOC:
//An HOC can wrap a component and provide it with translated strings based on the user's selected language.
function withI18n(Component) {
    return function I18nComponent(props) {
        const { locale, translations } = useI18n(); // Custom hook for managing translations
        return <Component i18n={translations[locale]} {...props} />;
    };
}

//Form Validation HOC:
//Create an HOC that adds form validation logic to a form component and handles form submission.
function withFormValidation(Component) {
    return function FormValidationComponent(props) {
        const [formData, setFormData] = useState({});
        const [errors, setErrors] = useState({});

        const handleInputChange = (event) => {
            // Validate and update formData and errors
        };

        const handleSubmit = () => {
            // Submit form data or show validation errors
        };

        return (
            <Component
                formData={formData}
                errors={errors}
                onInputChange={handleInputChange}
                onSubmit={handleSubmit}
                {...props}
            />
        );
    };
}

//Caching and Memoization HOC:
//You can create an HOC that caches expensive calculations or API responses to improve performance.
function withCache(Component) {
    const cache = {};

    return function CachedComponent(props) {
        const key = JSON.stringify(props);

        if (cache[key]) {
            return cache[key];
        } else {
            const result = <Component {...props} />;
            cache[key] = result;
            return result;
        }
    };
}
