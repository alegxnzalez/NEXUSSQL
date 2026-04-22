// TENDER_COLLAB_SG_STATUS.js

window.TENDER_COLLAB_SG_STATUS = {
  "tables": {
    "TENDER_COLLAB_SG_STATUS": {
      "description": "This table stores the status of the ship group tender as received from the service provider.",
      "columns": {
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
        "STATUS_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "STATUS_VALUE",
          "info": "The status type of the ship group tender."
},
        "STATUS_VALUE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "STATUS_VALUE",
          "info": "The status value for the status type of the ship group tender."
},
        "SHIP_GROUP_TENDER_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "TENDER_COLLAB_SG",
          "info": "A unique identifier to identify the ship group tender."
}
      },
      "fk_tables": []
    }
  }
};