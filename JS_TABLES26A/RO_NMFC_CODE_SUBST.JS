// RO_NMFC_CODE_SUBST.js

window.RO_NMFC_CODE_SUBST = {
  "tables": {
    "RO_NMFC_CODE_SUBST": {
      "columns": {
        "RATE_OFFERING_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "RATE_OFFERING",
          "info": "The GID for the related rate offering for the rate as table of values."
},
        "NMFC_LOW": {
          "type": "NUMBER",
          "nullable": false,
          "info": "Low National Motor Freight Classification value used for defining a rate as classification record."
},
        "NMFC_HIGH": {
          "type": "NUMBER",
          "nullable": false,
          "info": "Records additional information about the rate cost. This description will appear as the shipment cost type on the Financial tab of the Shipment Manager when this rate cost is applied to a shipment. If this field is left blank, a default shipment cost type appears such as Base or Discount."
},
        "RATE_AS_NMFC_CLASS": {
          "type": "NUMBER",
          "nullable": false,
          "info": "The National Motor Freight Classification (NMFC) fields allow you to apply a specific NMFC based rate using a range of NMFC classes. For example, if you want anything between the NMFC class of 45 and 65 to use the 55 NMFC class rate, then you would enter 45 in the NMFC Low field, 65 in the NMFC High field, and 55 in the Rate As NMFC Class field. Note: The NMFC Low and High fields are inclusive, meaning they follow a 'greater than or equal to' and a 'less than or equal to' pattern respectively. Using the above example, 45 and 65 are included in the ranges."
},
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
        "RATE_GEO_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "RATE_GEO",
          "info": "The GID for the related rate geo for the rate as table of values."
},
        "RO_NMFCCS_SEQ_NUM": {
          "type": "NUMBER",
          "nullable": false,
          "key_value": true,
          "info": "Internal sequence number for different row entries."
}
      },
      "fk_tables": []
    }
  }
};