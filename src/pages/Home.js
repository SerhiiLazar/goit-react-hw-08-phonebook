const styles = {
    container: {
      minHeight: 'calc(100vh - 50px)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      fontWeight: 700,
      fontSize: 48,
      textAlign: 'center',
      marginBottom: 20,
      color: '#1976d2',

    },
    titleH2: {
      fontWeight: 500,
      fontSize: 38,
      textAlign: 'center',
      
    },
  };

  export default function Home() {
    return (
      <div style={styles.container}>
        <h1 style={styles.title}>
        Welcome!
        </h1>
        <h2 style={styles.titleH2}>
        Here you can store your contacts. Thank you for using our phone book.
        </h2>
      </div>
    );
  }
  