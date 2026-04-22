// OB_LINE_PRU_DETAIL.js

window.OB_LINE_PRU_DETAIL = {
  "tables": {
    "OB_LINE_PRU_DETAIL": {
      "columns": {
        "DOMAIN_NAME": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "Database domain where this data is stored."
},
        "INSERT_USER": {
          "type": "VARCHAR2(128)",
          "nullable": false,
          "info": "The user ID of the data insert user."
},
        "INSERT_DATE": {
          "type": "DATE",
          "nullable": false,
          "info": "Date and time of data insert."
},
        "UPDATE_USER": {
          "type": "VARCHAR2(128)",
          "nullable": true,
          "info": "The user ID of the data update user."
},
        "UPDATE_DATE": {
          "type": "DATE",
          "nullable": true,
          "info": "Date and time of the most recent data update."
},
        "OB_LINE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "OB_LINE",
          "info": "The GID for the order base line."
},
        "PACKAGING_REFERENCE_UNIT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "PACKAGING_REFERENCE_UNIT",
          "info": "The packaging reference unit GID. The package reference unit (PRU) define another dimension to describe the consumption and capacity associated to building the order release ship units for transport. An example could be value of goods, loading meters, etc."
},
        "UNIT_PRU_COUNT": {
          "type": "NUMBER",
          "nullable": true,
          "info": "The packaging unit reference (PRU) count being described as how much of the PRU does this line consume."
},
        "TOTAL_PRU_COUNT": {
          "type": "NUMBER",
          "nullable": true,
          "info": "The total packaging unit reference (PRU) count being described as how much of the PRU does this line consume against the upper limit."
}
      },
      "fk_tables": []
    }
  }
};