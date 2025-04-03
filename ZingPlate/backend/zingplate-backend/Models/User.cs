using System.ComponentModel.DataAnnotations;

namespace ZingPlateBackend.Models
{
    public class User
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public string Name { get; set; } = string.Empty;

        [Required, EmailAddress]
        public string Email { get; set; } = string.Empty;

        [Required]
        public string PasswordHash { get; set; } = string.Empty; // Hashed password

        [Required]
        public string Role { get; set; } = string.Empty; // "Restaurant" or "Customer"
    }
}
