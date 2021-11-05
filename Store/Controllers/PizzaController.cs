using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Store.Models;
using Store.Services;

namespace Store.Controllers{

    [ApiController]
    [Route("api/v1/[controller]")]
    public class ProductController : ControllerBase{
        public ProductController(){}

        // GET all products
        [HttpGet]
        public ActionResult<List<Product>> GetAll() =>
            ProductService.GetAll();

        // GET by id
        [HttpGet("{id}")]
        public ActionResult<Product> Get(int id){
            var product = ProductService.Get(id);

            if (product == null)
                return NotFound();

            return product;
        }

        // POST
        [HttpPost]
        public IActionResult Create(Product product){
            ProductService.Add(product);
            return CreatedAtAction(nameof(Create), new { id = product.Id }, product);
        }

        // PUT
        [HttpPut("{id}")]
        public IActionResult Update(int id, Product product){
            if (id != product.Id)
                return BadRequest();

            var existing_product = ProductService.Get(id);
            if (existing_product is null)
                return NotFound();

            ProductService.Update(product);

            return NoContent();
        }

        // DELETE
        [HttpDelete("{id}")]
        public IActionResult Delete(int id){
            var product = ProductService.Get(id);

            if (product is null)
                return NotFound();

            ProductService.Delete(id);

            return NoContent();
        }
    }
}