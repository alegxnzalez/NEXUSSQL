// ESG_ACT_TYPE_ATTRIBUTE.js

window.ESG_ACT_TYPE_ATTRIBUTE = {
  "tables": {
    "ESG_ACT_TYPE_ATTRIBUTE": {
      "description": "This table is used for identifying the additional attributes to be captured against the emission activity for an emission activity type while calculating the emissions.",
      "columns": {
        "ESG_ACTIVITY_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "ESG_ACTIVITY_TYPE",
          "info": "The globally unique ID of an emission activity type."
},
        "ACT_TYPE_ATTRIBUTE_SEQ": {
          "type": "NUMBER",
          "nullable": false,
          "key_value": true,
          "info": "A system-generated sequence number for the record."
},
        "REMARK_QUAL_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "REMARK_QUAL",
          "info": "Remark qualifier of the business entity, the value of which needs to be captured, while copying the additional attributes from the business entity, like shipment, to the emission activity."
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