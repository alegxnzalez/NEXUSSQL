// DISTANCE_BY_ADDRESSES.js

window.DISTANCE_BY_ADDRESSES = {
  "tables": {
    "DISTANCE_BY_ADDRESSES": {
      "columns": {
        "RATE_DISTANCE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "RATE_DISTANCE"
},
        "SEQUENCE_NO": {
          "type": "NUMBER",
          "nullable": false,
          "key_value": true
},
        "SOURCE_ADDRESS_TYPE": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "values": [
                    "CITY PROVINCE",
                    "CITY COUNTRY",
                    "POSTAL CODE",
                    "POSTAL COUNTRY",
                    "LAT_LONG"
          ]
},
        "SOURCE_CITY": {
          "type": "VARCHAR2(240)",
          "nullable": true
},
        "SOURCE_COUNTY_QUALIFIER": {
          "type": "VARCHAR2(50)",
          "nullable": true
},
        "SOURCE_PROVINCE_CODE": {
          "type": "VARCHAR2(6)",
          "nullable": true
},
        "SOURCE_POSTAL_CODE": {
          "type": "VARCHAR2(240)",
          "nullable": true
},
        "SOURCE_COUNTRY_CODE3_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "COUNTRY_CODE"
},
        "DEST_ADDRESS_TYPE": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "values": [
                    "CITY PROVINCE",
                    "CITY COUNTRY",
                    "POSTAL CODE",
                    "POSTAL COUNTRY",
                    "LAT_LONG"
          ]
},
        "DEST_CITY": {
          "type": "VARCHAR2(240)",
          "nullable": true
},
        "DEST_COUNTY_QUALIFIER": {
          "type": "VARCHAR2(50)",
          "nullable": true
},
        "DEST_PROVINCE_CODE": {
          "type": "VARCHAR2(6)",
          "nullable": true
},
        "DEST_POSTAL_CODE": {
          "type": "VARCHAR2(240)",
          "nullable": true
},
        "DEST_COUNTRY_CODE3_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "COUNTRY_CODE"
},
        "DISTANCE_VALUE": {
          "type": "NUMBER",
          "nullable": false
},
        "DISTANCE_VALUE_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": false
},
        "DISTANCE_VALUE_BASE": {
          "type": "NUMBER",
          "nullable": false
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
},
        "SOURCE_LOCATION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "LOCATION",
          "info": "This is used to save location gid of source address when source address type is LAT_LONG for any EDE."
},
        "DEST_LOCATION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "LOCATION",
          "info": "This is used to save location gid of destination address when destination address type is LAT_LONG for any EDE."
}
      },
      "fk_tables": []
    }
  }
};