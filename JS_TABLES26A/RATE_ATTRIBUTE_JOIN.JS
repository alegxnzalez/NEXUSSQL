// RATE_ATTRIBUTE_JOIN.js

window.RATE_ATTRIBUTE_JOIN = {
  "tables": {
    "RATE_ATTRIBUTE_JOIN": {
      "description": "Joins together the offering type (such as air) to the attributes required for entering that type of offering.  For example, air travel might require a user to enter maximum weight allowed, handling charges, and general contract info.  Each of these attributes can be associated with one or more fields.  These three attributes would then be associated with the 'AIR' offering type, which would then determine the fields that appear to the user for entering rate information.",
      "columns": {
        "RATE_OFFERING_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "RATE_OFFERING_TYPE",
          "info": "GC3 Global identifier for the entity. Is created by concatenating Domain Name,'.' and XID."
},
        "RATE_ATTRIBUTE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "RATE_ATTRIBUTE",
          "info": "GC3 Global identifier for the entity. Is created by concatenating Domain Name,'.' and XID."
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
        "OTM_RELEASE": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "OTM_RELEASE"
}
      },
      "fk_tables": []
    }
  }
};