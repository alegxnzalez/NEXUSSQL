// CONTACT_POINT.js

window.CONTACT_POINT = {
  "tables": {
    "CONTACT_POINT": {
      "columns": {
        "CONTACT_POINT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
        },
        "CONTACT_POINT_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
        },
        "CONTACT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "CONTACT",
          "info": "Contact associated with this contact point. "
        },
        "COM_METHOD_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "COM_METHOD",
          "info": "Communication method ID. "
        },
        "COM_ADDRESS": {
          "type": "VARCHAR2(256)",
          "nullable": false,
          "info": "Communication address; e.g. email address or phone number. "
        },
        "ALIAS": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "Display alias for the contact point. "
        },
        "IS_VALID_ADDRESS": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ],
          "info": "If the address is invalid. "
        },
        "DELIVERY_WINDOW_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "DELIVERY_WINDOW_PROFILE",
          "info": "override the default delivery time window profile on the communication method"
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
      "fk_tables": [
        "NOTIFY_SUBJECT_CONTACT_POINT",
        "NS_CONTACT_POINT_OVERRIDE"
      ]
    }
  }
};
