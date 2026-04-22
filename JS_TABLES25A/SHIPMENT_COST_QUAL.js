// SHIPMENT_COST_QUAL.js

window.SHIPMENT_COST_QUAL = {
  "tables": {
    "SHIPMENT_COST_QUAL": {
      "columns": {
        "SHIPMENT_COST_QUAL_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "GC3 Global identifier for the entity. Is created by concatenating Domain Name,\".\" and XID. "
        },
        "SHIPMENT_COST_QUAL_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "GC3 Unique identifier for the entity. Is used for creating the GID "
        },
        "SHIPMENT_COST_QUAL_DESC": {
          "type": "VARCHAR2(120)",
          "nullable": true
        },
        "IS_VISIBLE_IF_MASTER_CARR": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ],
          "info": "Identifies whether the reference numbers with this qualifier should display on related shipments."
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
        "INVOICE_LINEITEM_COST_REF",
        "INVOICE_LINEITEM_VAT_COST_REF",
        "SHIPMENT_ACCESSORIAL_REF",
        "SHIPMENT_COST_REF",
        "SHIPMENT_SPECIAL_SERVICE_REF"
      ]
    }
  }
};
