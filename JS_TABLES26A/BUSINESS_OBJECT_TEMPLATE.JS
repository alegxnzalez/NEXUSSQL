// BUSINESS_OBJECT_TEMPLATE.js

window.BUSINESS_OBJECT_TEMPLATE = {
  "tables": {
    "BUSINESS_OBJECT_TEMPLATE": {
      "description": "This table associates a template with data query type for a given domain",
      "columns": {
        "OBJECT_TEMPLATE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "OBJECT_TEMPLATE_GID is the gid in the table shipment, ob_order_base and order_release where the is_template column is 'Y'"
},
        "DATA_QUERY_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "DATA_QUERY_TYPE",
          "info": "The query object type."
},
        "TEMPLATE_SEQUENCE": {
          "type": "NUMBER(8)",
          "nullable": false,
          "key_value": true,
          "info": "Sequence to allow multiple template for a given query object."
},
        "DOMAIN_NAME": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "DOMAIN_SETTING",
          "info": "Domain of the User."
},
        "DATA_SOURCE": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "values": [
                    "Both",
                    "Integration",
                    "User"
          ],
          "info": "Specifies if the template applies to data from integration, UI or both"
},
        "IS_ACTIVE": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
                    "Y",
                    "N"
          ],
          "info": "Boolean parameter to disable or enable the template"
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