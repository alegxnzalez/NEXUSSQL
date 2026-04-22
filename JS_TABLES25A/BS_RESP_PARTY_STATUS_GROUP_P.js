// BS_RESP_PARTY_STATUS_GROUP_P.js

window.BS_RESP_PARTY_STATUS_GROUP_P = {
  "tables": {
    "BS_RESP_PARTY_STATUS_GROUP_P": {
      "columns": {
        "BS_RESPONSIBLE_PARTY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "BS_RESPONSIBLE_PARTY"
        },
        "BS_STATUS_GROUP_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "BS_STATUS_GROUP_PROFILE"
        },
        "IS_EXCLUDED": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ]
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
