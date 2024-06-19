import React from 'react';

const CustomComponent = ({ name, imageSrc }) => {
  return (
    <div style={styles.container}>
      <img 
        style={styles.image} 
        src={imageSrc} 
        alt={name}
      />
      <div style={styles.text}>
        {name}
      </div>
    </div>
  );
};

const ParentComponent = () => {
  const componentsData = [
    { name: 'Iphone 15 blog', imageSrc: 'https://imagetolink.com/ib/0IyvsBeFtJ.jpg' },
    { name: 'Xiaomi 13T Pro 5G', imageSrc: 'https://imagetolink.com/ib/fOrqsgBgSy.png' },
    { name: 'Samsung Galaxy Z Fold 5G', imageSrc: 'https://imagetolink.com/ib/vYXicE2uxP.jpg' },
  ];

  return (
    <div style={styles.wrapper}>
      <div style={styles.title}>Tin Tức Công Nghệ</div>
      <div style={styles.parentContainer}>
        {componentsData.map((data, index) => (
          <CustomComponent key={index} name={data.name} imageSrc={data.imageSrc} />
        ))}
      </div>
    </div>
  );
};

const styles = {
  wrapper: {
    width: '100%',
    margin: '0 auto', // Center the parent container horizontally
  },
  title: {
    textAlign: 'left', // Align the title to the left
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '50px', // Space between title and the components
    marginTop: '50px',
  },
  parentContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    gap: '10px', // Add gap between components
    marginTop: '50px', // Add margin-top to create space between the title and the components
  },
  container: {
    width: 'calc((100% - 20px) / 3)', // Calculate width to fit three items within 1348px with a 10px gap
    paddingTop: 7.99,
    paddingBottom: 24.99,
    paddingLeft: 7.99,
    paddingRight: 7.99,
    background: 'white',
    borderRadius: 15,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 19,
    display: 'inline-flex',
  },
  image: {
    width: '100%',
    height: '250px',
    position: 'relative',
    borderRadius: 15,
  },
  text: {
    width: '100%',
    height: '27px',
    color: 'black',
    fontSize: '15.30px',
    fontFamily: 'Inter',
    fontWeight: '500',
    lineHeight: '27px',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    textAlign: 'center', // Center the text
  },
};

export default ParentComponent;
