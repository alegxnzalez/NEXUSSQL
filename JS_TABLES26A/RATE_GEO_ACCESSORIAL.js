// RATE_GEO_ACCESSORIAL.js

window.RATE_GEO_ACCESSORIAL = {
  "tables": {
    "RATE_GEO_ACCESSORIAL": {
      "description": "Anticipated additional costing due to requirements of the type of shipment for that particular travel path (lane).  For example, a carrier may charge extra for handling large loads on trucks into New York City, while another may not. By anticipating these additional costs, the GC3 engine can better determine which carrier is really going to be the most economical for a specific shipment.",
      "columns": {
        "ACCESSORIAL_COST_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "ACCESSORIAL_COST",
          "info": "Links to the rating setup used to determine the cost of providing the accessorial."
},
        "RATE_GEO_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "RATE_GEO",
          "info": "The GID for the rate geo."
},
        "ACCESSORIAL_CODE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "ACCESSORIAL_CODE",
          "info": "The GID for the accessorial code."
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
}
      },
      "fk_tables": []
    }
  }
};