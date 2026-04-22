// ORDER_ROUTING_RULE.js

window.ORDER_ROUTING_RULE = {
  "tables": {
    "ORDER_ROUTING_RULE": {
      "columns": {
        "ORDER_ROUTING_RULE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "Unique Id of the Order Routing Rule "
        },
        "ORDER_ROUTING_RULE_XID": {
          "type": "VARCHAR2(50)",
          "nullable": true,
          "info": "Unique Id of the Order routing Rule "
        },
        "RULE_NAME": {
          "type": "VARCHAR2(120)",
          "nullable": false,
          "info": "Name of the Order Routing Rule "
        },
        "DESCRIPTION": {
          "type": "VARCHAR2(120)",
          "nullable": true,
          "info": "Description of the Order Routing Rule "
        },
        "RULE_TYPE": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "values": [
            "ENTERPRISE",
            "ORGANIZATION",
            "CUSTOMER",
            "CUSTOMER SITE"
          ],
          "info": "Identifies the type of Order Routing Rule "
        },
        "LOCATION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "LOCATION",
          "info": "Identifies the associated location for 'ORGANIZATION', 'CUSTOMER SITE', and 'CUSTOMER' rule types "
        },
        "PAYMENT_METHOD_CODE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "PAYMENT_METHOD_CODE",
          "info": "Identifies the payment method criteria for this rule "
        },
        "EFFECTIVE_DATE": {
          "type": "DATE",
          "nullable": true,
          "info": "Effective date of the order routing rule "
        },
        "EXPIRATION_DATE": {
          "type": "DATE",
          "nullable": true,
          "info": "Expiration date of the order routing rule"
        },
        "LOCATION_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "LOCATION_PROFILE"
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
        "ORDER_ROUTING_RULE_D",
        "ROUTING_RULE_REFNUM"
      ]
    }
  }
};
