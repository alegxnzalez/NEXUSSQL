// GEO_POSTAL_POINT.js

window.GEO_POSTAL_POINT = {
  "tables": {
    "GEO_POSTAL_POINT": {
      "description": "This table is used to calculate the latitude and longitude, based on the postal code for the country. This is used if the location table does not contain latitude and longitude information.",
      "columns": {
        "COUNTRY_CODE3_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "COUNTRY_CODE",
          "info": "GC3 Global identifier for the entity. Is created by concatenating Domain Name,'.' and XID."
},
        "POSTAL_CODE": {
          "type": "VARCHAR2(15)",
          "nullable": false,
          "key_value": true
},
        "LAT": {
          "type": "NUMBER",
          "nullable": false
},
        "LON": {
          "type": "NUMBER",
          "nullable": false
},
        "ACCURACY": {
          "type": "NUMBER",
          "nullable": true
},
        "DOMAIN_NAME": {
          "type": "VARCHAR2(50)",
          "nullable": false
},
        "INSERT_USER": {
          "type": "VARCHAR2(128)",
          "nullable": false
},
        "INSERT_DATE": {
          "type": "DATE",
          "nullable": false
},
        "UPDATE_USER": {
          "type": "VARCHAR2(128)",
          "nullable": true
},
        "UPDATE_DATE": {
          "type": "DATE",
          "nullable": true
}
      },
      "fk_tables": []
    }
  }
};