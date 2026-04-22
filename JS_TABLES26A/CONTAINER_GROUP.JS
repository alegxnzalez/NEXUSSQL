// CONTAINER_GROUP.js

window.CONTAINER_GROUP = {
  "tables": {
    "CONTAINER_GROUP": {
      "columns": {
        "CONTAINER_GROUP_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "The GID for the container group."
},
        "CONTAINER_GROUP_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "The XID for the container group."
},
        "SHIPMENT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "SHIPMENT",
          "info": "Identifies the consol shipment to which the container group is assigned."
},
        "UNITIZATION_REQUEST_TYPE": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "values": [
                    "CUSTOMER",
                    "LOGISTICS"
          ],
          "info": "The unitization request type for this container group that can accept orders with the same unitization request flag and the same stuffing and destuffing location."
},
        "CONTAINER_RELEASE_NUMBER": {
          "type": "VARCHAR2(50)",
          "nullable": true,
          "info": "The container release number is assigned once a sea carrier receives a new booking line item. They return the container release number (CRN) corresponding to the new booking."
},
        "STUFF_LOCATION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "LOCATION",
          "info": "The location where the contents will be loaded (stuffed) into the container."
},
        "DESTUFF_LOCATION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "LOCATION",
          "info": "The location where the contents will be unloaded (destuffed) from the container."
},
        "REFERENCE_CODE": {
          "type": "VARCHAR2(50)",
          "nullable": true,
          "info": "This field is populated with the reference code that was entered on the unitization rule that was used to create this container."
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
      "fk_tables": [
        "CONTAINER_GROUP_D",
        "CONTAINER_GROUP_STATUS"
]
    }
  }
};