// ALLOCATION_RULE.js

window.ALLOCATION_RULE = {
  "tables": {
    "ALLOCATION_RULE": {
      "columns": {
        "ALLOCATION_RULE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "GC3 Global identifier for the entity. Is created by concatenating Domain Name,\".\" and XID. "
        },
        "ALLOCATION_RULE_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "GC3 Unique identifier for the entity. Is used for creating the GID "
        },
        "LOCATION_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "LOCATION_PROFILE",
          "info": "GC3 Global identifier for the entity. Is created by concatenating Domain Name,\".\" and XID. "
        },
        "CONS_INV_ALLOC_TYPE": {
          "type": "VARCHAR2(20)",
          "nullable": true,
          "values": [
            "BY TOTAL",
            "BY LINE ITEM"
          ],
          "info": "Consolidated Invoice Allocation Type. Depend on the type of 'By Line Item' or 'By Total', the amount of the child invoices or the total payment will be allocated to the orders on the related shipment. "
        },
        "MODE_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "MODE_PROFILE",
          "info": "This is one of the Allocation Rule criteria for determining the allocation rule for a given invoice. "
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
        "IS_ALLOC_SHIPMENT": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ],
          "info": "Identifies if the allocation rule is applicable for Shipment Allocation "
        },
        "IS_ALLOC_VOUCHER": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ],
          "info": "Identifies if the allocation rule is applicable for Voucher Allocation "
        },
        "IS_ALLOC_BILL": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ],
          "info": "Identifies if the allocation rule is applicable for Customer Bill Allocation "
        },
        "IS_ALLOC_VOUCHER_VAT": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ],
          "info": "Identifies if the allocation rule is applicable for Voucher Vat Allocation "
        },
        "INVOLVED_PARTY_QUALIFIER_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "INVOLVED_PARTY_QUAL",
          "info": "Allocation rule criteria for matching the involved party qualifier for shipment/invoice/bill "
        },
        "CONTACT_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "CONTACT_PROFILE",
          "info": "Allocation rule criteria for matching the involved party contact for shipment/invoice/bill"
        }
      },
      "fk_tables": [
        "ALLOCATION_RULE_DETAIL",
        "ALLOCATION_RULE_PROFILE_DETAIL"
      ]
    }
  }
};
