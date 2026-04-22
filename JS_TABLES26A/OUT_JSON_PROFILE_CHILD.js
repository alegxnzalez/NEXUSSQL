// OUT_JSON_PROFILE_CHILD.js

window.OUT_JSON_PROFILE_CHILD = {
  "tables": {
    "OUT_JSON_PROFILE_CHILD": {
      "description": "This table is used to store out json profile parent and child resources relation.",
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
        "OUT_JSON_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "OUT_JSON_PROFILE",
          "info": "The globally-unique identifier for an out JSON profile."
},
        "CHILD_RESOURCE_ID": {
          "type": "VARCHAR2(120)",
          "nullable": false,
          "key_value": true,
          "info": "The sub resource id that needs to be expanded."
},
        "CHILD_OUT_JSON_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "OUT_JSON_PROFILE",
          "info": "The globally-unique identifier for a child resource out JSON profile."
},
        "FILTER_CRITERIA": {
          "type": "VARCHAR2(2000)",
          "nullable": true,
          "info": "Contains filter criteria values for resources, such as orderReleases.refnums, orderReleases.remarks, orderReleases.lines.remarks."
}
      },
      "fk_tables": []
    }
  }
};