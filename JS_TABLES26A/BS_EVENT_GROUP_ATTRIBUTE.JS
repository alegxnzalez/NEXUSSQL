// BS_EVENT_GROUP_ATTRIBUTE.js

window.BS_EVENT_GROUP_ATTRIBUTE = {
  "tables": {
    "BS_EVENT_GROUP_ATTRIBUTE": {
      "columns": {
        "BS_EVENT_GROUP_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "BS_EVENT_GROUP"
},
        "ATTRIBUTE_NAME": {
          "type": "VARCHAR2(256)",
          "nullable": false,
          "key_value": true
},
        "ATTRIBUTE_VALUE": {
          "type": "VARCHAR2(256)",
          "nullable": false
},
        "ATTRIBUTE_DESCRIPTION": {
          "type": "VARCHAR2(512)",
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