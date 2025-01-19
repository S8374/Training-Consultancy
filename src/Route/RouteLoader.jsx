
import { useNavigation } from "react-router-dom";
import { FaSpinner } from "react-icons/fa";

const RouteLoader = () => {
  const navigation = useNavigation();

  return (
    navigation.state === "loading" && (
      <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
        <FaSpinner className="text-blue-500 text-4xl animate-spin" />
        <p className="text-white text-xl mt-4">Loading...</p>
      </div>
    )
  );
};

export default RouteLoader;
