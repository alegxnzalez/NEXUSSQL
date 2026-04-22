// LANE_ATTRIBUTE_DEF_D.js

window.LANE_ATTRIBUTE_DEF_D = {
  "tables": {
    "LANE_ATTRIBUTE_DEF_D": {
      "columns": {
        "LANE_ATTRIBUTE_DEF_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "LANE_ATTRIBUTE_DEF"
        },
        "LANE_ATTRIBUTE_VALUE": {
          "type": "VARCHAR2(128)",
          "nullable": false,
          "key_value": true,
          "info": "An allowable value for the given lane attribute"
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
